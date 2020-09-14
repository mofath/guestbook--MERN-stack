import React, { useState } from 'react';

import classes from './Content.module.css';

const Content = (props) => {
    const [ContentValue, setcontentValue] = useState(props.content);
    const [Type, setType] = useState("display");

    const handleChange = (e) => {
        setcontentValue(e.target.value);
    }

    const handleCancel = () => {
        setcontentValue(props.content);
        setType("dispay");
    }

    const handleEdit = async() => {
        await props.editPost({ id: props.id, index: props.index, newPostText: ContentValue });
        setType("dispay");
    }

    return (
        <div>
            {
                Type === "form" ?
                    <div className={[classes.EditPostForm, "vertical-layout"].join(' ')}>
                        <textarea
                            onChange={handleChange}
                            value={ContentValue}
                        />
                        <span className={classes.SaveBtn}>Click to<button onClick={handleCancel}>Cancel</button></span>
                    </div>
                    :
                    <div className={classes.ContentDisplay}>
                        {props.content}
                    </div>
            }
            <div className={classes.Btns}>
                {
                    Type === "form" ?
                        <button onClick={handleEdit} >Save</button>
                        :
                        <button onClick={()=> setType("form")} >Edit</button>
                }
                <button onClick={() => props.deletePost({ id: props.id, index: props.index })}>Delete</button>
            </div>
        </div>
    )
}

export default Content;


