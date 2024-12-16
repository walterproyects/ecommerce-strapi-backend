pipeline {
    agent any

    tools { 
        nodejs "nodeversion18"
    }

    stages {
        stage('Aplicar cambios') {
            steps {
                sh '''
                cd /home/ecommerce-strapi-backend
                git pull 
                '''
            }
        }

        stage("Finalizar") {
            steps {
                sh "echo 'Pipeline completado correctamente!'"
            }
        }
    }
}
