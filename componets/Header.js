import Image from 'next/image';

function Header() {
    return (
        <div>
            <h1>Header</h1>
            {/* Header Left */}
            <div>
                <Image 
                src='https://links.papareact.com/5me'
                width={40}
                height={40}
                layout='fixed'
                />
            </div>

            {/* Header Center */}

            {/* Header Right */}
        </div>
    )
}

export default Header
