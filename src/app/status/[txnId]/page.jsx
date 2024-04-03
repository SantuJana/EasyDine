"use client"

import { useEffect } from "react"
import crypto from 'crypto'
import axios from 'axios'

export default function Status({ params }){

    const txnId = params.txnId
    const saltKey = '4003d53c-f177-4a7f-9e65-121ceb13d44f'
    const saltIndex = 1

    useEffect(()=>{
        const string = `/pg/v1/status/M22MOUIB2SGZU/${txnId}` + saltKey
        const hash256 = crypto.createHash('sha256').update(string).digest('hex')
        const checkSum = hash256 + '###' + saltIndex
        const options = {
            method: 'get',
            url: 'https://api.phonepe.com/apis/hermes/pg/v1/status/M22MOUIB2SGZU/'+txnId,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checkSum,
                'X-MERCHANT-ID': 'M22MOUIB2SGZU'
            },
        }
        axios.request(options)
        .then( response =>{
            alert('Success')
            console.log(response);
        })
        .catch( error =>{
            alert(error.message)
        })
    },[])
    
    return(
        <>
            <h1>This is status page</h1>
            <h5>Transaction Id: {txnId}</h5>
        </>
    )
}