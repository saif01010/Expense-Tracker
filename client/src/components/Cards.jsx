import { useQuery } from "@apollo/client";
import { GET_TRANSACTIONS } from "../graphql/queries/transaction.query";
import Card from "./Card";



const Cards = () => {
	const {data,loading,error}=useQuery(GET_TRANSACTIONS);
	if(error) return <p>Error</p>;
	if(loading) return <p>Loading...</p>;
	// console.log(data);
	return (
		<div className='w-full px-10 min-h-[40vh]'>
			<p className='text-5xl font-bold text-center my-10'>History</p>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-start mb-20'>
				{ !loading && data.getAllTransections.map((transaction) => (
					<Card key={transaction._id} transaction={transaction} />
				))}
			</div>
			{!loading && data.getAllTransections.length === 0 && (
				<p className='text-2xl font-bold text-center'>No transactions to show</p>
			)}
		</div>
	);
};
export default Cards;