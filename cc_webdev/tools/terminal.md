# Terminal

## Setting up the Terminal

* `~/.bash_profile` saves all settings related to a session
* `source ~/.bash_profile` activates the changes without having to restart the terminal
* `alias pd="pwd"` creates an alias for the command `pwd`
* `export USER="Name"` exports the variable `$USER` to all child sessions
  * `export PS1=">> "` changes the command prompt to '>>'
* `echo $PATH` each directory displayed includes scripts that can be executed
* `env` returns a list of environment variables set by the user

## Shell Scripting

```bash
#!/bin/bash
first_greeting="Nice to meet you!"
later_greeting="How are you?"
greeting_occasion=0
greeting_limit=$1
while [ $greeting_occasion -lt $greeting_limit ]
do
  if [ $greeting_occasion -lt 1 ]
  then
    echo $first_greeting
  else
    echo $later_greeting
  fi
  greeting_occasion=$((greeting_occasion + 1))
done
```

* `for variable in $iterable`
* `until` loop that is a negated while loop
* `alias newcommand='./script "arg"'`
* `$@` to accept infinite arguments
* `files=/home/usr/*'` and `for file in $files`

## Simple Build Script

```bash
#!/bin/bash

echo "Welcome to the first build script!"
firstline=$(head -n 1 source/changelog.md)
#Comment split first line into an array
read -a splitfirstline <<< $firstline
version=${splitfirstline[1]}

echo -e "Current Version is $version \nIs that correct? (0 for no, 1 for yes)"
read versioncontinue

if [ $versioncontinue -eq "1" ]
then
  echo "OK"
  for file in source/*
  do
    if [ "$file" == "source/secretinfo.md" ]
    then
      touch build/secretinfo.md
      sed 's/42/XX/' $file > build/secretinfo.md
      echo "Redacted" $file
    else
      echo "Copying" $file
      cp $file build/
    fi
  done
  cd build/
  echo "Files in build/ with version $version:"
  ls
  cd ..
else
  echo "Please come back when you are ready"
fi
```
