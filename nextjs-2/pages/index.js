import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};

// export async function getServerSideProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://micaelconti:micael123@cluster0.qkfkwcu.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  const filteredMeetups = meetups.map((meet) => ({
    title: meet.title,
    address: meet.address,
    image: meet.image,
    description: meet.description,
    id: meet._id.toString(),
  }));

  client.close();
  return {
    props: {
      meetups: filteredMeetups,
    },
    revalidate: 10,
  };
}

export default HomePage;
