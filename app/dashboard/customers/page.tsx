import { fetchCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Customers() {
    const customers = await fetchCustomers();
    return (
        <>
            <CustomersTable customers={customers}/>
        </>
    )
}