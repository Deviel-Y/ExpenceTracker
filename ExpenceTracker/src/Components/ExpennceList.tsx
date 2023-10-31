import useExpenceStore from "../store";

function ExpenceList() {
  const { expences, expenceDelete } = useExpenceStore();

  if (expences.length === 0) return null;
  return (
    <table className="myTable table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th colSpan={2}>Category</th>
        </tr>
      </thead>
      <tbody>
        {expences.map((item) => (
          <tr key={item.id}>
            <td>{item.description}</td>
            <td>${item.amount.toFixed(2)}</td>
            <td>{item.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => expenceDelete(item.id!)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td colSpan={3}>
            $
            {expences
              .reduce((acc, expence) => acc + expence.amount, 0)
              .toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default ExpenceList;
