pipeline {
    agent any
  
    tools { 
        nodejs "nodeversion18" // Asegúrate de que "nodeversion18" esté configurado en Jenkins
    }
  
    stages {
        stage('Configurar Git Safe Directory') {
            steps {
                script {
                    // Agregar la ruta del directorio a los "safe directories"
                    sh '''
                    git config --global --add safe.directory /home/ecommerce-strapi-backend
                    '''
                }
            }
        }

        stage('Aplicar cambios') {
            steps {
                script {
                    // Hacer git pull después de configurar el safe.directory
                    sh '''
                    cd /home/ecommerce-strapi-backend
                    echo "Haciendo git pull"
                    git pull
                    '''
                }
            }
        }

        stage("Finish") {
            steps {
                sh "echo 'Pipeline completado correctamente!'"
            }
        }
    }
}
