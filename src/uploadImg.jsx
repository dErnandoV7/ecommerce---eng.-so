export const uploadImageToCloudinary = async (file) => {

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', import.meta.env.VITE_upload_preset); 
    formData.append('cloud_name', import.meta.env.VITE_cloud_name);
    
    try {
        const response = await fetch('https://api.cloudinary.com/v1_1/dwtb1c0yt/image/upload', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Falha no upload: ' + response.statusText);
        }

        const data = await response.json();

        if (data.secure_url) {
            console.log('Imagem enviada com sucesso!');
            return { success: true, url: data.secure_url };
        } else {
            return { success: false, message: 'Erro ao obter URL da imagem!' };
        }
    } catch (error) {
        console.error('Erro ao enviar a imagem:', error);
        return { success: false, message: 'Erro ao enviar a imagem: ' + error.message };
    }
};
