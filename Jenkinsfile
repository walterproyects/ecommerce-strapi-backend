pipeline {
  
    agent any 
  
    tools { 
        nodejs "nodeversion18"
    }
  
    stages {     
        stage('Aplicar cambios') {
            sh 'cd /home/ecommerce-strapi/ecommerce-strapi-backend'
            sh 'git pull'
        }

    stage("Finish") {
          steps{
              sh "echo final FINAL"
          }
      }    
}
