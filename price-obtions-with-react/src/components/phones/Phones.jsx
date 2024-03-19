import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Audio } from 'react-loader-spinner'

const Phones = () => {

    const [phones, setPhones] = useState([])
    const [laoding, setLoading] = useState(true)

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const fakePhones = data.data.data.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1]),
                    }
                    return obj
                })
                setPhones(fakePhones)
                console.log(fakePhones)
                setLoading(false)
            })
    }, [])




    return (
        <div>
            {
                laoding && <div className="my-20 left-1/2 absolute">
                    <span class="loading loading-spinner loading-lg text-secondary mx-auto "></span>
                </div>
            }
            <h2 className="text-5xl">Phones: {phones.length}</h2>
            <BarChart width={550} height={300} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey=""></XAxis>
                <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default Phones;