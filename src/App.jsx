import "./App.css";

const Message = ({ isLoggedIn }) => {
  // console.log(isLoggedIn);
  // if (isLoggedIn) {
  //   return <p>Welcome Back, User!</p>;
  // } else {
  //   return <p>Please login to continue.</p>;
  // }

  return isLoggedIn ? (
    <p>Welcome Back, User!</p>
  ) : (
    <p>Please login to continue.</p>
  );
};

const Greetings = ({ isMorning }) => (
  <p>{isMorning ? "Good Morning!" : "Good Evening!"}</p>
);

const ShowNotification = ({ notification }) => {
  return <div>{notification && <p>{notification}</p>}</div>;
};

const TicketPricing = ({ passengerAge }) => {
  let ticketPrice = 100;
  return (
    <div>
      {passengerAge > 60 ? (
        <p>Ticket Price: {ticketPrice - ticketPrice * 0.15}</p>
      ) : (
        <p>Ticket Price: {ticketPrice}</p>
      )}
    </div>
  );
};

export default function App() {
  return (
    <main>
      <Message isLoggedIn={true} />
      <Greetings isMorning={false} />
      <ShowNotification notification="Notification Message" />
      <TicketPricing passengerAge={98} />
    </main>
  );
}
