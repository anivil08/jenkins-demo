pipeline {
       agent any
       stages {
           stage('Build Check') {
               steps {
                   echo 'Checking project repository...'
                   sh 'ls -la'
               }
           }
           stage('Deploy Simulation') {
               steps {
                   echo 'Deploying index.html...'
                   sh 'cat index.html'
               }
           }
       }
   }
