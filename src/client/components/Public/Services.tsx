import * as React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {

    return (
        <>
            <h1 className="flex justify-center text-2xl font-bold text-indigo-700 mt-14">Services</h1>


            <div className="p-0 mt-14">
                <div className="mx-0 md:flex">
                    <div className="flex-1">

                        <img className="w-full h-auto" src="/images/dogandcat.jpeg" alt="dogandcat" />

                    </div>
                    <div className="flex-1 text-center text-gray-700">

                        <Link to='/events' className="text-lg font-bold tracking-wide text-indigo-600 uppercase">
                            Initial Meet & Greet
                                     </Link>
                        <div className="block mt-2 text-xl leading-tight text-indigo-900">
                            Free
                            </div>
                        <div className="block mt-2 text-lg leading-tight text-gray-900">
                            A quick consultation to go over all your pet needs and home amenities to keep everything on routine and give your pets some stress free love and company while you are away. You will need to have a key ready for us please.
                            </div>

                    </div>
                </div>
            </div>

            <div className="p-0">
                <div className="mx-0 md:flex">
                    <div className="flex-1 order-first md:order-last">

                        <img className="w-full h-auto" src="/images/catcheckin.jpeg" alt="catcheckin" />

                    </div>
                    <div className="flex-1 order-last text-center text-gray-700 md:order-first">

                        <Link to='/events' className="text-lg font-bold tracking-wide text-indigo-600 uppercase">
                            Cat Check In
                             </Link>
                        <div className="block mt-2 text-xl leading-tight text-indigo-900">
                            $25.00 per visit

                            </div>
                        <div className="block mt-2 text-lg leading-tight text-gray-900">
                            In your home cats will receive feeding, water, cleaning litter box, love, affection, bringing in mail and water plants if needed (approximately 30 min/visit)
                            </div>

                    </div>

                </div>
            </div>

            <div className="p-0">
                <div className="mx-0 md:flex">
                    <div className="flex-1">

                        <img className="w-full h-auto" src="/images/dogcheckin.jpeg" alt="dogcheckin" />

                    </div>
                    <div className="flex-1 text-center text-gray-700">
                        <Link to='/events' className="text-lg font-bold tracking-wide text-indigo-600 uppercase">
                            Dog Check-In & Walk
                             </Link>
                        <div className="block mt-2 text-xl leading-tight text-indigo-900">
                            $25.00 per visit

                            </div>
                        <div className="block mt-2 text-lg leading-tight text-gray-900">
                            In your home dogs will receive feeding, water, love, affection, play, bringing in mail and water plants if needed. Visit includes a short walk (approximately 30 min/visit)
                            </div>
                    </div>

                </div>
            </div>

            <div className="p-0">
                <div className="mx-0 md:flex">
                    <div className="flex-1 order-first md:order-last">

                        <img className="w-full h-auto" src="/images/catsleep.jpeg" alt="catsleep" />

                    </div>
                    <div className="flex-1 order-last text-center text-gray-700 md:order-first">
                        <Link to='/events' className="text-lg font-bold tracking-wide text-indigo-600 uppercase">
                            Cat Overnight Stay
                             </Link>
                        <div className="block mt-2 text-xl leading-tight text-indigo-900">
                            $65.00 for a 12 hour visit

                            </div>
                        <div className="block mt-2 text-lg leading-tight text-gray-900">
                            This includes all your check in visit needs including pet sitter staying in your home.
                            </div>
                        <div className="block mt-2 text-sm leading-tight text-gray-500">
                            * Price for 2 cats. $5 for each additional cat
                            </div>
                    </div>

                </div>
            </div>

            <div className="p-0">
                <div className="mx-0 md:flex">
                    <div className="flex-1 ">

                        <img className="w-full h-auto" src="/images/dogsleep.jpeg" alt="dogsleep" />

                    </div>
                    <div className="flex-1 text-center text-gray-700">
                        <Link to='/events' className="text-lg font-bold tracking-wide text-indigo-600 uppercase">
                            Dog Overnight Stay
                             </Link>
                        <div className="block mt-2 text-xl leading-tight text-indigo-900">
                            $75.00 for a 12 hour visit

                            </div>
                        <div className="block mt-2 text-lg leading-tight text-gray-900">
                            This includes all your check in visit needs with a walk when we arrive and before we leave in the morning included.
                            </div>

                        <div className="block mt-2 text-sm leading-tight text-gray-500">
                            * Price for 2 dogs. $5 for each additional dog
                            </div>
                    </div>

                </div>
            </div>

            <div className="p-0">
                <div className="mx-0 md:flex">
                    <div className="flex-1 order-first md:order-last">

                        <img className="w-full h-auto" src="/images/nailtrim.jpeg" alt="nailtrim" />

                    </div>
                    <div className="flex-1 order-last text-center text-gray-700 md:order-first">
                        <Link to='/events' className="text-lg font-bold tracking-wide text-indigo-600 uppercase">
                            Dog or Cat Nail Trim
                             </Link>
                        <div className="block mt-2 text-xl leading-tight text-indigo-900">
                            $65.00 for a 12 hour visit

                            </div>
                        <div className="block mt-2 text-xl leading-tight text-indigo-900">
                            $25.00 for 1 pet
                            </div>
                        <div className="block mt-2 text-xl leading-tight text-indigo-900">
                            $35.00 for 2 pets
                            </div>
                        <div className="block mt-2 text-xl leading-tight text-indigo-900">
                            $5 for each additional pet
                            </div>
                        <div className="block mt-2 text-lg leading-tight text-gray-900">
                            Avoid the stress of having to take your dog or cat to the groomers for a nail trim. Service includes trimming the nails and the use of a Dremel to grind the nails to a smooth finish.
                            </div>
                        <div className="block mt-2 text-sm leading-tight text-gray-500">
                            * Dremel is for dog nail trims only
                            </div>

                    </div>

                </div>
            </div>


            <div className="p-0 mb-6 md:mb-0">
                <div className="mx-0 md:flex">
                    <div className="flex-1">

                        <img className="w-full h-auto" src="/images/cat.jpeg" alt="cat" />

                    </div>
                    <div className="flex-1 text-center text-gray-700">
                        <Link to='/events' className="text-lg font-bold tracking-wide text-indigo-600 uppercase">
                            All Services also include:
                             </Link>
                        <div className="block mt-2 text-xl leading-tight text-gray-900 text-md">
                            Bring in mail/newspaper/packages
                            </div>
                        <div className="block mt-2 text-xl leading-tight text-gray-900 text-md">
                            Trash out on trash day
                            </div>
                        <div className="block mt-2 text-xl leading-tight text-gray-900 text-md">
                            Alternate lights/blinds
                            </div>
                        <div className="block mt-2 text-xl leading-tight text-gray-900 text-md">
                            Light plant watering
                            </div>
                        <div className="block mt-2 text-xl leading-tight text-gray-900 text-md">
                            Setting your alarm
                            </div>
                        <div className="block mt-2 text-xl leading-tight text-gray-900 text-md">
                            Medication administration
                            </div>
                        <div className="block mt-2 text-sm leading-tight text-gray-500">
                            * This is done following your vet's instructions with pets that are easily handled. If your pet is too stressed to have this done at home we recommend you work with your vet.
                            </div>
                    </div>
                </div>
            </div>


            {/* <div className="flex flex-wrap overflow-hidden">
                <div className="flex items-center w-full overflow-hidden md:h-72 h-80 mt-14">
                            <div className="mx-5 lg:flex-shrink-0">
                                <img className="rounded-lg w-80 lg:w-64" src="/images/dogandcat.jpeg" alt="dogandcat" />
                            </div>
                            <div className="mt-4 mb-4 lg:mt-0 lg:ml-6">
                                <Link to='/events' className="text-lg font-bold tracking-wide text-indigo-600 uppercase">
                                    Initial Meet & Greet
                             </Link>
                             <div className="block mt-2 text-xl leading-tight text-indigo-900">
                                 Free
                            </div>
                            <div className="block mt-2 text-lg leading-tight text-gray-900">
                            A quick consultation to go over all your pet needs and home amenities to keep everything on routine and give your pets some stress free love and company while you are away. You will need to have a key ready for us please.                            
                            </div>
                            </div>
                        </div>
            </div>

            <div className="flex flex-wrap overflow-hidden">
                <div className="flex items-center justify-end w-full overflow-hidden bg-indigo-200 md:h-72 h-80">
                            
                            <div className="mt-4 mb-4 lg:mt-0 lg:ml-6">
                                <Link to='/events' className="text-lg font-bold tracking-wide text-indigo-600 uppercase">
                                    Cat Check-In
                             </Link>
                             <div className="block mt-2 text-xl leading-tight text-indigo-900">
                                 $25.00 per visit
                            </div>
                            <div className="block mt-2 text-lg leading-tight text-gray-900">
                            In your home cats will receive feeding, water, cleaning litter box, love, affection, bringing in mail and water plants if needed (approximately 30 min/visit)
                            </div>
                            </div>
                            <div className="mx-5 lg:flex-shrink-0">
                                <img className="rounded-lg lg:w-64" src="/images/catcheckin.jpeg" alt="catcheckin" />
                            </div>
                        </div>
            </div>


            <div className="flex flex-wrap overflow-hidden">
                <div className="flex items-center w-full overflow-hidden bg-gray-300 md:h-72 h-80">
                            <div className="mx-5 lg:flex-shrink-0">
                                <img className="rounded-lg lg:w-64" src="/images/dogcheckin.jpeg" alt="dogcheckin" />
                            </div>
                            <div className="mt-4 mb-4 lg:mt-0 lg:ml-6">
                                <Link to='/events' className="text-lg font-bold tracking-wide text-indigo-600 uppercase">
                                    Dog Check-In & Walk
                             </Link>
                             <div className="block mt-2 text-xl leading-tight text-indigo-900">
                                 $25.00 per visit
                            </div>
                            <div className="block mt-2 text-lg leading-tight text-gray-900">
                            In your home dogs will receive feeding, water, love, affection, play, bringing in mail and water plants if needed. Visit includes a short walk (approximately 30 min/visit)
                            </div>
                            </div>
                        </div>
            </div>

            <div className="flex flex-wrap overflow-hidden">
                <div className="flex items-center justify-end w-full overflow-hidden bg-indigo-200 md:h-72 h-80">
                            
                            <div className="mt-4 mb-4 lg:mt-0 lg:ml-6">
                                <Link to='/events' className="text-lg font-bold tracking-wide text-indigo-600 uppercase">
                                    Cat Overnight Stay
                             </Link>
                             <div className="block mt-2 text-xl leading-tight text-indigo-900">
                                 $65.00 for a 12 hour visit
                            </div>
                            <div className="block mt-2 text-lg leading-tight text-gray-900">
                            This includes all your check in visit needs including pet sitter staying in your home. 
                            </div>
                            <div className="block mt-2 text-sm leading-tight text-gray-500">
                            * Price for 2 cats. $5 for each additional cat
                            </div> 
                            </div>
                            <div className="mx-5 lg:flex-shrink-0">
                                <img className="rounded-lg lg:w-64" src="/images/catsleep.jpeg" alt="catsleep" />
                            </div>
                        </div>
            </div>


            <div className="flex flex-wrap overflow-hidden">
                <div className="flex items-center w-full overflow-hidden bg-gray-300 md:h-72 h-80">
                            <div className="mx-5 lg:flex-shrink-0">
                                <img className="rounded-lg lg:w-64" src="/images/dogsleep.jpeg" alt="dogsleep" />
                            </div>
                            <div className="mt-4 mb-4 lg:mt-0 lg:ml-6">
                                <Link to='/events' className="text-lg font-bold tracking-wide text-indigo-600 uppercase">
                                    Dog Overnight Stay
                             </Link>
                             <div className="block mt-2 text-xl leading-tight text-indigo-900">
                                 $75.00 for a 12 hour visit
                            </div>
                            <div className="block mt-2 text-lg leading-tight text-gray-900">
                            This includes all your check in visit needs with a walk when we arrive and before we leave in the morning included. 
                            <div className="block mt-2 text-sm leading-tight text-gray-500">
                            * Price for 2 dogs. $5 for each additional dog
                            </div>                            
                            </div>
                            </div>
                        </div>
            </div>

            <div className="flex flex-wrap overflow-hidden">
                <div className="flex items-center justify-end w-full overflow-hidden bg-indigo-200 md:h-72 h-80">
                            
                            <div className="mt-4 mb-4 lg:mt-0 lg:ml-6">
                                <Link to='/events' className="text-lg font-bold tracking-wide text-indigo-600 uppercase">
                                    Dog or Cat Nail Trim
                             </Link>
                             <div className="block mt-2 text-xl leading-tight text-indigo-900">
                                 $25.00 for 1 pet
                            </div>
                            <div className="block mt-2 text-xl leading-tight text-indigo-900">
                                 $35.00 for 2 pets
                            </div>
                            <div className="block mt-2 text-xl leading-tight text-indigo-900">
                                 $5 for each additional pet
                            </div>
                            <div className="block mt-2 text-lg leading-tight text-gray-900">
                            Avoid the stress of having to take your dog or cat to the groomers for a nail trim. Service includes trimming the nails and the use of a Dremel to grind the nails to a smooth finish. 
                            </div>
                            <div className="block mt-2 text-sm leading-tight text-gray-500">
                            * Dremel is for dog nail trims only
                            </div>  
                            </div>
                            <div className="mx-5 lg:flex-shrink-0">
                                <img className="rounded-lg lg:w-64" src="/images/nailtrim.jpeg" alt="nailtrim" />
                            </div>
                        </div>
            </div>

            <div className="flex flex-wrap overflow-hidden">
                <div className="flex items-center w-full overflow-hidden bg-gray-300 md:h-72 h-80">
                            <div className="mx-5 lg:flex-shrink-0">
                                <img className="rounded-lg lg:w-64" src="/images/cat.jpeg" alt="cat" />
                            </div>
                            <div className="mt-4 mb-4 lg:mt-0 lg:ml-6">
                                <div className="text-lg font-bold tracking-wide text-indigo-600 uppercase">
                                    All Services also include:
                             </div>
                            <div className="block mt-2 leading-tight text-gray-900 text-md">
                            Bring in mail/newspaper/packages                           
                            </div>
                            <div className="block mt-2 leading-tight text-gray-900 text-md">
                            Trash out on trash day                           
                            </div>
                            <div className="block mt-2 leading-tight text-gray-900 text-md">
                            Alternate lights/blinds                         
                            </div>
                            <div className="block mt-2 leading-tight text-gray-900 text-md">
                            Light plant watering                           
                            </div>
                            <div className="block mt-2 leading-tight text-gray-900 text-md">
                            Setting your alarm                         
                            </div>
                            <div className="block mt-2 leading-tight text-gray-900 text-md">
                            Medication administration                       
                            </div>
                            <div className="block mt-2 text-sm leading-tight text-gray-500">
                            * This is done following your vet's instructions with pets that are easily handled. If your pet is too stressed to have this done at home we recommend you work with your vet.
                            </div>  
                            </div>
                        </div>
            </div> */}
        </>
    )

}


export default Services;