import React, { useEffect } from 'react'
import {RiMailLine } from '@remixicon/react'


const TypeformEmbed = () => {
    useEffect(() => {
        // Create script element
        const script = document.createElement('script');
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;

        // Append script to the document head
        document.head.appendChild(script);

        // Cleanup script when the component is unmounted
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div className="col-lg-8">
            {/* Embed your Typeform here using the provided div structure */}
            <div 
                className="typeform-widget" 
                data-url="https://w9wycqv45on.typeform.com/to/oabUzDrg" 
                style={{ width: '100%', height: '500px' }}
                data-tf-live="01HZFXQNGBMTPBSZYES66ZXGY6"
            ></div>
            <script src="//embed.typeform.com/next/embed.js"></script>
        </div>
    );
};

export default TypeformEmbed;
