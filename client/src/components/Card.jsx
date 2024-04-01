import { FaLocationDot } from "react-icons/fa6";
import { BsCardText } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/formateDate";
import { useQuery } from "@apollo/client";
import {Get_Current_User} from '../graphql/queries/user.query';
const categoryColorMap = {
	saving: "from-green-700 to-green-400",
	expense: "from-pink-800 to-pink-600",
	investment: "from-blue-700 to-blue-400",
	// Add more categories and corresponding color classes as needed
};

const Card = ({ transaction }) => {
	let {amount, category, description, location, paymentType, date} = transaction;
	category = category?.toLowerCase();
	const cardClass = categoryColorMap[category];
	description = description?.[0].toUpperCase() + description?.slice(1);
	category = category?.[0].toUpperCase() + category?.slice(1);
	const formatedDate = formatDate(date);

	const {data}= useQuery(Get_Current_User);
	return (
		<div className={`rounded-md p-4 bg-gradient-to-br ${cardClass}`}>
			<div className='flex flex-col gap-3'>
				<div className='flex flex-row items-center justify-between'>
					<h2 className='text-lg font-bold text-white'>{}</h2>
					<div className='flex items-center gap-2'>
						<FaTrash className={"cursor-pointer"} />
						<Link to={`/transaction/123`}>
							<HiPencilAlt className='cursor-pointer' size={20} />
						</Link>
					</div>
				</div>
				<p className='text-white flex items-center gap-1'>
					<BsCardText />
					Description: {description}
				</p>
				<p className='text-white flex items-center gap-1'>
					<MdOutlinePayments />
					Payment Type: {paymentType}
				</p>
				<p className='text-white flex items-center gap-1'>
					<FaSackDollar />
					Amount: ₹{amount}
				</p>
				<p className='text-white flex items-center gap-1'>
					<FaLocationDot />
					Location:{location || "Not available"}
				</p>
				<div className='flex justify-between items-center'>
					<p className='text-xs text-black font-bold'>{formatedDate}</p>
					<img
						src={data?.currentUser.profilePic || "https://tecdn.b-cdn.net/img/new/avatars/2.webp"}
						className='h-8 w-8 border rounded-full'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
};
export default Card;