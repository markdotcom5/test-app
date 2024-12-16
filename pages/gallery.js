import Image from 'next/image';

export default function Gallery() {
    const images = [
        { src: '/images/Employee_Training.jpg', alt: 'Employee Training', width: 300, height: 200 },
        { src: '/images/astronaut-in-outer-space-against-the-backdrop-of-the-planet-earth-elements-of-this-image-furnished-by-nasa_ejk5s4vyg_thumbnail-1080_01.png', alt: 'Astronaut in Space', width: 300, height: 200 },
        { src: '/images/ksc-20160426-ph_dng0001_0002.0.0.jpg', alt: 'Space Launch', width: 300, height: 200 },
        { src: '/images/iss036e006522.jpg', alt: 'ISS Image', width: 300, height: 200 }
    ];

    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>Gallery</h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                {images.map((img, index) => (
                    <Image
                        key={index}
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        style={{ borderRadius: '8px', margin: '1rem' }}
                    />
                ))}
            </div>
        </div>
    );
}
