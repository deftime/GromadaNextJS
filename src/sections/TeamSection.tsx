import { dbServer } from "@/api/firebase-server";
import { arrFromObject } from "@/utils/arrFromObject";
import { sortByOrder } from "@/utils/sortByOrder";
import { TeamMemberType } from "@/types/firebase-data";

import { Title } from "@/components/Title";
import { Person } from "@/components/Person";
import { ShowMoreLayout } from "@/components/ShowMoreLayout";


export async function TeamSection() {
  const snapshot = await dbServer.ref('Team').once('value');
  const unsortedData: TeamMemberType[] = arrFromObject(snapshot.val());
  const readyData: TeamMemberType[] = sortByOrder(unsortedData);

  return (
    <section id="team" className="py-24 md:py-30 px-8 md:px-16 bg-white" aria-label="Наша команда">
      <div className="max-w-6xl mx-auto">

        <Title sup={'Команда фахівців'} title={'Наша команда'} />

        <ShowMoreLayout maxHeight={700} maxHeightMobile={1940}>
          <div className="grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-3 sm:grid-cols-2">
            {readyData.map((person) => {
              if (person.active) return <Person key={person.name} name={person.name} role={person.status} bio={person.desc} photo={person.photo}/>
            })}
          </div>
        </ShowMoreLayout>

      </div>
    </section>
  )

}