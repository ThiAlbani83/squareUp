import React from 'react'
import WorkCard from './WorkCard'

function NotableWorks() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 border-y border-y-gray15'>
            <WorkCard title={"E-Commerce Platform for Fashion Hub"} image={'/boutique.png'} worktitle={"Chic Boutique"}
                tag={"https:/www.chicboutique.com "} description={"We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction."} />

            <WorkCard title={"Mobile App for Food Delivery Service"} image={'/hungrybites.png'} worktitle={"HungryBites"} tag={"https:/www.hungrybites.com"} description={"HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency."} />

            <WorkCard title={"Booking and Reservation System for Event Management"} image={'/eventmaster.png'} worktitle={"EventMasters"} tag={"https:/www.eventmasters.com"} description={"EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences."} />

            <WorkCard title={"Custom Software for Workflow Automation"} image={'/protech.png'} worktitle={"ProTech Solutions"} tag={"https:/www.protechsolutions.com"} description={"ProTech Solutions approached us to create a mobile app that streamlined your business. The app included the features you might need to use, like payments, ordering, financial tracking... resulting in improved customer convenience and operational efficiency."} />

            <WorkCard title={"Web Portal for Real Estate Listings"} image={'/dreamhomes.png'} worktitle={"Dream Homes Realty"} tag={"https:/www.dreamhomesrealty.com"} description={"Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily."} />

            <WorkCard title={"Mobile App for Fitness Tracking"} image={'/fitlife.png'} worktitle={"FitLife Tracker"} tag={"https:/www.fitlifetracker.com"} description={"FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles."} />

            <WorkCard title={"Custom Software for Supply Chain Management"} image={'/globalsolutions.png'} worktitle={"Global Logistics Solutions"} tag={"https:/www.globallogisticssolutions.com"} description={"Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs."} />

            <WorkCard title={"Educational Platform for Online Learning"} image={'/educonnect.png'} worktitle={"EduConnect"} tag={"https:/www.educonnect.com"} description={"EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages."} />

            <WorkCard title={"Mobile App for Travel Planning"} image={'/wanderwise.png'} worktitle={"WanderWise"} tag={"https:/www.wanderwise.com"} description={"WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations."} />

            <WorkCard title={"Web Application for Customer Relationship Management"} image={'/connectcrm.png'} worktitle={"ConnectCRM"} tag={"https:/www.connectcrm.com"} description={"ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth."} />
        </div>
    )
}

export default NotableWorks