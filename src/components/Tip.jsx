

const tip = () => {
  const persons = [
    {
      id: 1,
      habits: [
        {
          morningHabits: {
            morning: 'play badminton'
          }
        }
      ]
    }
  ];

  const [{ habits: [{ morningHabits: { morning } }] }] = persons;

  const numbers = [22, 44, 55];
  const [a, b, c] = numbers;

  const peer = {
    id: 1,
    name: 'lio'
  };

  const { id, name } = peer;
  return (
    <div>
      {persons.morning}
    </div>
  )
}

export default tip
