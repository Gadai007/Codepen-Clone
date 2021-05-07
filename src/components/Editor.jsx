import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'

const Editor = (props) => {

    const [open , setOpen] = useState(true)
    const { displayName, language, value, onChange } = props

    function handleChange(editor, data, value){
        onChange(value)
    }
    return (
        <div className={`editor-container ${open ? '': 'collapsed'}`}>
            <div className='editor-title'>
                {displayName}
                <button 
                    type='button' 
                    onClick={() => setOpen(prev => !prev)}
                    className='expand-collapse-btn'>
                    { open ? (<i class="fas fa-compress-alt"></i>): (<i class="fas fa-expand-alt"></i>)}
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className='code-mirror-wrapper'
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material'
                }}/>
        </div>
    )
}

export default Editor


//<i class="fas fa-compress-alt"></i>
//<i class="fas fa-expand-alt"></i>