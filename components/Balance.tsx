import { optimismSepolia } from 'viem/chains';
import { http, createPublicClient, formatEther } from 'viem'
import { useEffect, useState } from 'react';

export const publicClient = createPublicClient({
    //@ts-expect-error
    chain: optimismSepolia,
    transport: http('https://rpc.ankr.com/optimism_sepolia'),
})

const Balance = ({ address }) => {

    const [bal, setBal] = useState('0');
    useEffect(() => {
        publicClient.getBalance({
            address: address
        }).then((balance) => {
            setBal(formatEther(balance));
        })
    }, [])


    return (
        <span>{bal} ETH</span>
    )
}

export default Balance;