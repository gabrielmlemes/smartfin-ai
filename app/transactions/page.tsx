import { DataTable } from "@/components/ui/data-table";
import { db } from "@/lib/prisma";
import { TransactionColumns } from "./_columns";
import AddTransactionButton from "@/components/add-transaction-button";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <div className="p-6">
      {/* titulo e botão */}
      <div className="mb-6 flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>

        <AddTransactionButton />
      </div>

      <DataTable columns={TransactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
