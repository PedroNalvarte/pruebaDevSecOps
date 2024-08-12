export const handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Esto es una prueba de despliegue de mi lambda'),
    };
    return response;
};
