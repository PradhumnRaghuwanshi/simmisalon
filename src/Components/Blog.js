import React from 'react'

function Blog() {
  return (
    <div>
       <div className="w-full lg:h-[30vh] h-[20vh] flex justify-center items-end ">
        <div className="text-black w-[80%] lg:text-[45px] text-[40px]  font-bold">
          Blog
        </div>
      </div>
      <div className="w-full lg:h-[10vh] h-[5vh] flex justify-center">
        <div className="h-[0.5px] w-[80%] bg-[#F9728C]"></div>
      </div>
      
{/* <section class="bg-white ">
    <div class="w-[90%] px-6 py-10 mx-auto dark:bg-[] shadow-2xl">

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-black ">
                        How to use sticky note for problem solving
                    </a>
                    
                    <span class="text-sm text-[#F9728C]  ">On: 20 October 2019</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-black ">
                        How to use sticky note for problem solving
                    </a>

                    <span class="text-sm text-[#F9728C]">On: 20 October 2019</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-black ">
                        Morning routine to boost your mood
                    </a>

                    <span class="text-sm text-[#F9728C]">On: 25 November 2020</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-black ">
                        All the features you want to know
                    </a>

                    <span class="text-sm text-[#F9728C]">On: 30 September 2020</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-black ">
                        Minimal workspace for your inspirations
                    </a>

                    <span class="text-sm text-[#F9728C]">On: 13 October 2019</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" class="text-xl font-semibold text-gray-800 hover:underline dark:text-black ">
                        What do you want to know about Blockchane
                    </a>
                    
                    <span class="text-sm text-[#F9728C]">On: 20 October 2019</span>
                </div>
            </div>
        </div>
    </div>
</section> */}
<section className=" ">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 ">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-[#fcf2f4]">
			<img src="https://q8q9k3t4.rocketcdn.me/wp-content/uploads/2015/08/3-Major-Benefits-of-Laser-Skin-Treatments-768x512.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline text-black">3 Major Benefits of Laser Skin Treatments</h3>
				<span className="text-xs dark:text-[#F9728C]">February 19, 2024</span>
				<p className='text-black'>1. Effective <br />
                2. Speedy Treatment <br />
                3. Laser Treats the Scars
                </p>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-[#fcf2f4]">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://q8q9k3t4.rocketcdn.me/wp-content/uploads/2021/02/Cosmetic-Laser-Technician-Offers-Reliable-Solutions-for-Skin-Issues-768x512.jpg" />
				<div className="p-6 space-y-2 ">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline  text-black">Cosmetic Laser Technician Offers Reliable Solutions for Skin Issues</h3>
					<span className="text-xs dark:text-[#F9728C]">January 21, 2024</span>
					<p className='text-black'>Laser therapy has a solution for many skin conditions that eclipse the beauty of a person. Some of these conditions can even damage a person’s confidence and influence his life badly.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-[#fcf2f4]">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://q8q9k3t4.rocketcdn.me/wp-content/uploads/2021/02/Laser-Hair-Removal-Training-at-the-Hands-of-Professionals-768x512.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-black">Laser Hair Removal Training at the Hands of Professionals</h3>
					<span className="text-xs dark:text-[#F9728C]">January 22, 2024</span>
					<p className='text-black'>When it comes to removing unwanted hair from the body, no area is an exception. Complete satisfaction is in full body hair removal.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-[#fcf2f4]">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://q8q9k3t4.rocketcdn.me/wp-content/uploads/2021/02/Laser-Hair-Removal-School-Offering-Modern-Laser-Courses-768x556.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-black">Laser Hair Removal School Offering Modern Laser Courses</h3>
					<span className="text-xs dark:text-[#F9728C]">January 23, 2024</span>
					<p className='text-black'>You may be wondering what does it require to become a laser hair removal specialist. If you are interested in health and beauty, you can earn a laser treatment certificate from our school.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-[#fcf2f4] hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://q8q9k3t4.rocketcdn.me/wp-content/uploads/2021/02/Laser-Technician-Offers-Skilled-Services-with-Professional-Training-768x512.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-black">Laser Technician Offers Skilled Services with Professional Training</h3>
					<span className="text-xs dark:text-[#F9728C]">January 24, 2024</span>
					<p className='text-black'>Some skin issues are easily resolvable with massage, exfoliation, facial, and the use of the right products. But when skin suffers from more significant problems like burns, wrinkles, warts, etc., we use advanced technology in laser.</p>
				</div>
			</a>
			
		</div>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-[#F9728C]">Load more posts...</button>
		</div>
	</div>
</section>
    </div>
  )
}

export default Blog