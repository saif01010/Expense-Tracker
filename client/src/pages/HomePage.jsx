import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


import Cards from "../components/Cards";
import TransactionForm from "../components/TransactionForm";
import { LogOut } from "../graphql/mutations/user.mutation";
import { Get_Current_User } from "../graphql/queries/user.query";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { MdLogout } from "react-icons/md";
import {toast} from 'react-hot-toast';
import { useEffect, useState } from "react";
import { Get_Catagory_Stats } from "../graphql/queries/transaction.query";

ChartJS.register(ArcElement, Tooltip, Legend);

const HomePage = () => {
	const [chartData, setChardata] = useState({
		labels: [],
		datasets: [
			{
				label: "₹",
				data: [],
				backgroundColor: [],
				borderColor: [],
				borderWidth: 1,
				borderRadius: 30,
				spacing: 10,
				cutout: 130,
			},
		],
	});
	const { data: catagoryStats } = useQuery(Get_Catagory_Stats,{refetchQueries:['getCatagoryStats']});
	const { data } = useQuery(Get_Current_User);

	useEffect(() => {
		if(catagoryStats?.catagagroryStats){
			const labels = catagoryStats.catagagroryStats.map((stat) => stat.category);
			const data = catagoryStats.catagagroryStats.map((stat) => stat.total);
			const backgroundColor = catagoryStats.catagagroryStats.map((stat) => {
				if (stat.category === "Saving") return "rgba(75, 192, 192, 1)";
				if (stat.category === "Expense") return "rgba(255, 99, 132, 1)";
				if (stat.category === "Investment") return "rgba(54, 162, 235, 1)";
			});
			const borderColor = catagoryStats.catagagroryStats.map((stat) => {
				if (stat.category === "Saving") return "rgba(75, 192, 192,1)";
				if (stat.category === "Expense") return "rgba(255, 99, 132, 1)";
				if (stat.category === "Investment") return "rgba(54, 162, 235, 1)";
			});
			setChardata({
				labels,
				datasets: [ 
					{
						label: "₹",
						data,
						backgroundColor,
						borderColor,
						borderWidth: 1,
						borderRadius: 30,
						spacing: 10,
						cutout: 130,
					},
				],
			});
		}
	}, [catagoryStats]);

	const [logOut,{loading,client}] = useMutation(LogOut,{refetchQueries:['getCurrentUser']});

	const handleLogout = async() => {
		try {
			await logOut();
			client.clearStore();

			toast.success("Logged out successfully");
			
			// if(!loading) window.location.replace("/login");	
			
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};

//after logut we need to clear the cache and redirect to login page


	return (
		
			<div className='flex flex-col gap-6 items-center max-w-7xl mx-auto z-20 relative justify-center'>
			
				<div className='flex items-center'>
					<p className='md:text-4xl text-2xl lg:text-4xl font-bold text-center relative z-50 mb-4 mr-4 bg-gradient-to-r from-pink-600 via-indigo-500 to-pink-400 inline-block text-transparent bg-clip-text'>
						Spend wisely, track wisely
					</p>
					<img
						src={data?.currentUser.profilePic || "https://tecdn.b-cdn.net/img/new/avatars/2.webp"}
						className='w-11 h-11 rounded-full border cursor-pointer'
						alt='Avatar'
					/>
					{!loading && <MdLogout className='mx-2 w-5 h-5 cursor-pointer' onClick={handleLogout} />}
					{/* loading spinner */}
					{loading && <div className='w-6 h-6 border-t-2 border-b-2 mx-2 rounded-full animate-spin'></div>}
				</div>
				<div className='flex flex-wrap w-full justify-center items-center gap-6 opacity-100 '>
					<div className='h-[330px] w-[330px] md:h-[360px] md:w-[360px] trans  '>
						<Doughnut data={chartData} />
					</div>

					<TransactionForm />
				</div>
				<Cards />
			</div>
		
	);
};
export default HomePage;