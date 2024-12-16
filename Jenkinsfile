pipeline {
    agent any
  
    tools { 
        nodejs "nodeversion18" // Asegúrate de que "nodeversion18" esté configurado en Jenkins
    }
  
    stages {
        stage('Aplicar cambios') {
            steps {
                script {
                    // Cambia el directorio y realiza git pull en un solo paso
                    sh '''
                    cd /home/ecommerce-strapi/ecommerce-strapi-backend
                    git pull
                    '''
                }
            }
        }

        stage("Finish") {
            steps {
                sh "echo final FINAL"
            }
        }
    }
}
