import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import React from 'react'

 const Header = () => {

    const HamburgerMenu = () => (
    <Button 
        color="gray" 
        buttonType="outline" 
        rounded={true}
        iconOnly={true} 
        ripple="dark" 
        className="h-20 w-20 border-0">
            <Icon name="menu" size="3xl"/>
    </Button>
    );

    const DocsTitle = () => (
    <>
        <Icon name="description" size="5xl" color="blue"/>
        <h1 className="ml-2 text-gray-700 text-2xl">Docs</h1>
    </>
    );


    const SearchTextField = () => (
    <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
        <Icon name="search" size="3xl" color="gray"/>
        <input type="text" placeholder='Search' className='flex-grow px-5 text-base bg-transparent outline-none'/>
    </div>
    );


    const AppsIcon = () => (
    <Button 
        color="gray"  
        buttonType="outline" 
        rounded={true}
        iconOnly={true} 
        ripple="dark" 
        className="ml-5 md:ml-20 h-20 w-20 border-0">
            <Icon name="apps" size="3xl" color="gray"/>
    </Button>
    );

    const CircleAvatar = () => (
        <img 
        loading='lazy' 
        className='hidden md:inline-flex cursor-pointer h-12 w-12 rounded-full ml-2' 
        src="https://lh3.googleusercontent.com/ogw/ADea4I4k2w4Mhie2StNXeg6klntKAGk-J16kmunI6micQuM=s83-c-mo" 
        alt="" 
        />
    );

    return (
        <div className='sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white'>
                <HamburgerMenu/>
                <DocsTitle/>
                <SearchTextField/>
                <AppsIcon/>
                <CircleAvatar/>
        </div>
    )
}

export default Header;
