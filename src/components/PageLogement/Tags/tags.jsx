import './tags.scss'


export default function tag(props) {


    const tag = props.tags.map((tag) => <p key={tag}>{tag}</p>)
    return <>
        <div className='containerTags'>
            {tag}
        </div>
    </>
}