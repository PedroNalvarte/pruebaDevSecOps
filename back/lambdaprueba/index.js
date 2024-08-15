exports.handler = async (event) => {
    try {
        // Lógica principal de tu Lambda
        const response = {
            statusCode: 200,
            body: JSON.stringify('Esto es una prueba de despliegue de mi lambda 14/08/2024'),
        };
        return response;
    } catch (error) {
        // Manejo de errores
        console.error('Error en la ejecución de la Lambda:', error);
        return {
            statusCode: 500,
            body: JSON.stringify('Ocurrió un error en la Lambda'),
        };
    }
};
