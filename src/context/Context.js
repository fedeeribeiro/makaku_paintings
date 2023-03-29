import { createContext, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [page, setPage] = useState(0);
    
    const switchPage = (event, newPage) => {
        setPage(newPage);
    };

    const [deviceSize, setDeviceSize] = useState(window.innerWidth);
    const [displaySize, setDisplaySize] = useState(() => {
        if (deviceSize < 600) {
            return 'xs';
        } else if (deviceSize < 900) {
            return 'md';
        } else if (deviceSize < 1200) {
            return 'lg';
        } else {
            return 'xl';
        }
    })

    useEffect(() => {
        const resizeW = () => setDeviceSize(window.innerWidth);

        window.addEventListener("resize", resizeW);
        if (deviceSize < 600) {
            setDisplaySize('xs');
        } else if (deviceSize < 900) {
            setDisplaySize('md');
        } else if (deviceSize < 1200) {
            setDisplaySize('lg');
        } else {
            setDisplaySize('xl');
        }
        
        return () => window.removeEventListener("resize", resizeW);
    },[deviceSize]);

    const [selectedFile, setSelectedFile] = useState('');

	const changeHandler = (event) => {
        try {
            const fileType = event.target.files[0].type;
            if (fileType.includes('png') || fileType.includes('jpg') || fileType.includes('jpeg')) {
                setSelectedFile(event.target.files[0]);
            } else {
                setSelectedFile('');
            }
        } catch {
            setSelectedFile('');
        }
	};

    const [URL, setURL] = useState('');

    const imageUpload = async () => {
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('upload_preset', 'makaku-paintings-orders');
        formData.append('cloud_name', 'makaku-paintings');
        fetch('https://api.cloudinary.com/v1_1/makaku-paintings/image/upload', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            console.log('URL vale', URL)
            console.log(data)
            console.log(data.url)
            const url = data.url;
            setURL(url);
            console.log('URL ahora vale', URL)
            console.log('URL set', URL)
        });
    }

    const [orderName, setOrderName] = useState('');
    const [orderEmail, setOrderEmail] = useState('');
    const [orderDescription, setOrderDescription] = useState('');
    const [orderNumber, setOrderNumber] = useState(1);

	const submitOrder = async (e) => {
        await imageUpload();
        const orderType = (e.target.id === 'submitIlustraciones') ? 'Ilustraciones' : 'Cuadros';
        const templateParams = {
            orderNumber,
            orderName,
            orderEmail,
            orderType,
            orderDescription,
            URL
        }

        emailjs.send('makaku_paintings_orders', 'orders_template', templateParams, 'Wiexd527yJxBmJMHs')
        .then((result) => {
            console.log(result.text);
            console.log('email sent with params', templateParams)
        }, (error) => {
            console.log(error.text);
        });

        setOrderNumber(orderNumber + 1);
        setOrderName('');
        setOrderEmail('');
        setOrderDescription('');
        setSelectedFile('');
        setURL('');

        setShowAlert(true);
	};

    const [showAlert, setShowAlert] = useState(false);
    const [alertStage, setAlertStage] = useState("fadeIn");

    return (
        <Context.Provider value={{
            page,
            setPage,
            switchPage,
            selectedFile,
            changeHandler,
            submitOrder,
            imageUpload,
            URL,
            orderName,
            setOrderName,
            orderEmail,
            setOrderEmail,
            orderDescription,
            setOrderDescription,
            showAlert,
            setShowAlert,
            alertStage,
            setAlertStage,
            displaySize
        }}>
            { children }
        </Context.Provider>
    )
}

export default ContextProvider;