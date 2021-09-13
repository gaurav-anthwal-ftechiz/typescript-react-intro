import React, {useState, useRef} from 'react'

interface Person {
    name: string,
    age: number,
    male: boolean
}

interface Props {
    text: string,
    show: boolean,
    fn?: (bob: string)=> void,
    person?: Person,
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>)=> void;
}

interface IData {
    name: string,
    age: number | null,
    address: string
}

const AnotherComp:React.FC<Props> = ({text, show, handleChange}) => {
    const [count, setCount] = useState<number | null>(5)
    const [data, setData] = useState<IData>({
        name: '',
        age: null,
        address: ''
    })

    const inputRef = useRef<HTMLInputElement>(null)

    setCount(10)
    setData({...data})

    return (
        <div>
            this is another component

            <h3>{text}</h3>
            {show ? 'showing' : 'not showing'}
            <input type="text" ref={inputRef} onChange={handleChange}/>
        </div>
    )
}

export default AnotherComp
