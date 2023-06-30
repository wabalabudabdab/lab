import React, {useState, useEffect, useContext, useCallback} from 'react';
import Monaco, {useMonaco} from "@monaco-editor/react";
import { useDispatch } from 'react-redux'
import { getAllPosts } from '../../redux/features/post/postSlice'

import './Editor.css'
import {useParams} from "react-router-dom";
import axios from "axios";

function Editor({post}) {
    const monaco = useMonaco()

    const [value, setValue] = useState(null);

    useEffect(()=>{
        setValue(post);
    },[post])

    useEffect(() => {
        if (!monaco) return;
        // do conditional chaining
        monaco.editor.setTheme("vs-dark")
        // or make sure that it exists by other ways
        if (monaco) {
            console.log("here is the monaco instance:", monaco);
        }
    }, [monaco]);
    return (
        <>
            <div className='flex-box'>

                <Monaco
                    height="90vh"
                    width={"50%"}
                    defaultValue={value}
                    defaultLanguage="html"
                    onChange={(val,evt) => setValue(val)}
                />
                <iframe
                    id='display'
                    srcDoc={value}
                    width={"50%"}
                    title="output"
                    sandbox="allow-scripts"
                    // frameBorder="0"
                />
            </div>
        </>
    )
}

export default Editor;
