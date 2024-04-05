#!/bin/bash

# This script builds and archives binaries and supporting files for mac, linux, and windows.
# If directory ./server/static exists, it's asumed to contain TinodeWeb and then it's also
# copied and archived.

# Supported OSs: mac (darwin), windows, linux.
goplat=( linux )

# CPUs architectures: amd64 and arm64. The same order as OSs.
goarc=( amd64 arm64 )

# Number of platform+architectures.
buildCount=${#goplat[@]}

# Supported database tags
dbadapters=( postgres )
dbtags=( ${dbadapters[@]} alldbs )

for line in $@; do
  eval "$line"
done

version=demo
echo "Releasing $version"


# Prepare directory for the new release
rm -fR ./releases/${version}
mkdir ./releases/${version}

# Tar on Mac is inflexible about directories. Let's just copy release files to
# one directory.
rm -fR ./releases/demo
mkdir -p ./releases/demo/templ

# Copy templates and database initialization files
cp ./server/tinode.conf ./releases/demo
cp ./server/templ/*.templ ./releases/demo/templ
cp ./tinode-db/data.json ./releases/demo
cp ./tinode-db/*.jpg ./releases/demo
cp ./tinode-db/credentials.sh ./releases/demo

# Create directories for and copy TinodeWeb files.
if [[ -d ./server/static ]]
then
  mkdir -p ./releases/demo/static/img
  mkdir ./releases/demo/static/css
  mkdir ./releases/demo/static/audio
  mkdir ./releases/demo/static/src
  mkdir ./releases/demo/static/umd

  cp ./server/static/img/*.png ./releases/demo/static/img
  cp ./server/static/img/*.svg ./releases/demo/static/img
  cp ./server/static/img/*.jpeg ./releases/demo/static/img
  cp ./server/static/audio/*.m4a ./releases/demo/static/audio
  cp ./server/static/css/*.css ./releases/demo/static/css
  cp ./server/static/index.html ./releases/demo/static
  cp ./server/static/index-dev.html ./releases/demo/static
  cp ./server/static/version.js ./releases/demo/static
  cp ./server/static/umd/*.js ./releases/demo/static/umd
  cp ./server/static/manifest.json ./releases/demo/static
  cp ./server/static/service-worker.js ./releases/demo/static
  # Create empty FCM client-side config.
  echo 'const FIREBASE_INIT = {};' > ./releases/demo/static/firebase-init.js
else
  echo "TinodeWeb not found, skipping"
fi

for (( i=0; i<${buildCount}; i++ ));
do
  plat="${goplat[$i]}"
  arc="${goarc[$i]}"

  # Use .exe file extension for binaries on Windows.
  ext=""
  if [ "$plat" = "windows" ]; then
    ext=".exe"
  fi

  # Remove possibly existing keygen from previous build.
  rm -f ./releases/demo/keygen
  rm -f ./releases/demo/keygen.exe

  # Keygen is database-independent
#  env GOOS="${plat}" GOARCH="${arc}" go build -ldflags "-s -w" -o ./releases/demo/keygen${ext} ./keygen > /dev/null

  for dbtag in "${dbtags[@]}"
  do
    echo "Building ${dbtag}-${plat}/${arc}..."

    # Remove possibly existing binaries from previous build.
    rm -f ./releases/demo/tinode
    rm -f ./releases/demo/tinode.exe
    rm -f ./releases/demo/init-db
    rm -f ./releases/demo/init-db.exe

    # Build tinode server and database initializer for RethinkDb and MySQL.
    # For 'alldbs' tag, we compile in all available DB adapters.
    if [ "$dbtag" = "alldbs" ]; then
      buildtag="${dbadapters[@]}"
    else
      buildtag=$dbtag
    fi

    env GOOS="${plat}" GOARCH="${arc}" go build \
      -ldflags "-s -w -X main.buildstamp=1234" -buildvcs=false -tags "${buildtag}" \
      -o ./releases/demo/tinode${ext} ./server > /dev/null
    env GOOS="${plat}" GOARCH="${arc}" go build \
      -ldflags "-s -w" -buildvcs=false -tags "${buildtag}" -o ./releases/demo/init-db${ext} ./tinode-db > /dev/null

    # Build archive. All platforms but Windows use tar for archiving. Windows uses zip.
#    if [ "$plat" = "windows" ]; then
#      # Remove possibly existing archive.
#      rm -f ./releases/${version}/tinode-${dbtag}."${plat}-${arc}".zip
#      # Generate a new one
#      pushd ./releases/demo > /dev/null
#      zip -q -r ../${version}/tinode-${dbtag}."${plat}-${arc}".zip ./*
#      popd > /dev/null
#    else
      plat2=$plat
      # Rename 'darwin' tp 'mac'
      if [ "$plat" = "darwin" ]; then
        plat2=mac
      fi

      # Remove possibly existing archive.
      rm -f ./releases/${version}/tinode-${dbtag}."${plat2}-${arc}".tar.gz
      # Generate a new one
#      tar -C ./releases/demo -zcf ./releases/${version}/tinode-${dbtag}."${plat2}-${arc}".tar.gz .
#    fi
  done
done
#
## Build chatbot release
#echo "Building python code..."
#
#./build-py-grpc.sh
#
## Release chatbot
#echo "Packaging chatbot.py..."
#rm -fR ./releases/demo
#mkdir -p ./releases/demo
#
#cp chat/chatbot/python/chatbot.py ./releases/demo
#cp chat/chatbot/python/quotes.txt ./releases/demo
#cp chat/chatbot/python/requirements.txt ./releases/demo
#
#tar -C chat/releases/demo -zcf ./releases/${version}/py-chatbot.tar.gz .
#pushd ./releases/demo > /dev/null
#zip -q -r ../${version}/py-chatbot.zip ./*
#popd > /dev/null
#
## Release tn-cli
#echo "Packaging tn-cli..."
#
#rm -fR ./releases/demo
#mkdir -p ./releases/demo
#
#cp chat/tn-cli/*.py ./releases/demo
#cp chat/tn-cli/*.txt ./releases/demo
#
#tar -C chat/releases/demo -zcf ./releases/${version}/tn-cli.tar.gz .
#pushd ./releases/demo > /dev/null
#zip -q -r ../${version}/tn-cli.zip ./*
#
## Clean up temporary files
#rm -fR ./releases/demo
