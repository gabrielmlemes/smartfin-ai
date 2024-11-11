import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { db } from "@/lib/prisma";
import { ArrowDownUpIcon } from "lucide-react";
import { TransactionColumns } from "./_columns";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <div className="p-6">
      {/* titulo e botão */}
      <div className="mb-6 flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>

        <Button className="rounded-full font-bold">
          Adicionar Transação
          <ArrowDownUpIcon />
        </Button>
      </div>

      <DataTable columns={TransactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
