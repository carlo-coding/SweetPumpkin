import React from 'react';
import { useUpdateEffect } from "../../../../chest/CustomHooks"
import { AddFile , Container, ImagePreview, InfoContainer, Info, Error} from "./styles.js";

export function Image({error, ...args}) {
    const [file, setFile] = React.useState();
    const [src, setSrc] = React.useState();

    const handleFileChange = (event)=> {
        setFile(event.target.files[0]);
        args.onChange(event);
    }

    React.useEffect(()=> {
        if (validImageExtension(file?.name)){
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener("load", (e)=> {
                setSrc(e.target.result)
            });
            return ()=>reader.removeEventListener("load", ()=>{});
        }else {
            setSrc(null);
        }
    }, [file])
    return <Container>
        {src && <ImagePreview src={src} alt={file?.name}/>}
        {src && 
            <InfoContainer>
                <Info>{file?.name}</Info>
                <Info>{new Date(file?.lastModifiedDate).toLocaleDateString()}</Info>
                <Info>{file?.size / 1000} KB</Info>
            </InfoContainer>
        }
        <AddFile>
            {src? "Cambiar archivo" : "Añadir archivo"}
            <input
                {...args}
                type="file"
                onChange={handleFileChange}
                style={{opacity: "0", position: "absolute"}} 
            />
        </AddFile>
        {error && <Error className="error-message">{error}</Error>}
    </Container>
}


export function USLImage({user, formik, ...args}) {
    const [file, setFile] = React.useState();
    const [src, setSrc] = React.useState(user?.fileUrl);

    const handleFileChange = (event)=> {
        setFile(event.target.files[0]);
        args.onChange(event);
    }
 
    useUpdateEffect(()=> {
        if (validImageExtension(file?.name)){
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener("load", (e)=> {
                setSrc(e.target.result)
            });
            return ()=>reader.removeEventListener("load", ()=>{});
        }else {
            setSrc(null);
        }
    }, [file])
    return <Container>
        {src && <ImagePreview src={src} alt={file?.name}/>}
        {(src && file) && 
            <InfoContainer>
                <Info>{file?.name}</Info>
                <Info>{new Date(file?.lastModifiedDate).toLocaleDateString()}</Info>
                <Info>{file?.size / 1000} KB</Info>
            </InfoContainer>
        }
        <AddFile>
            {src? "Cambiar archivo" : "Añadir archivo"}
            <input
                {...args}
                type="file"
                onChange={handleFileChange}
                style={{opacity: "0", position: "absolute"}} 
            />
        </AddFile>
        {formik?.errors[args.name] && <Error className="error-message">{formik?.errors[args.name]}</Error>}
    </Container>
}


export function validImageExtension(fname) {
    const extensions = ["gif", "png", "jpg", "tiff", "tif", "raw", "bmp", "psd", "pdf", "eps", "svg", "ai"];
    const fileExt = fname?.slice((Math.max(0, fname.lastIndexOf(".")) || Infinity) + 1)?.toLowerCase();
    return  extensions.includes(fileExt);
}