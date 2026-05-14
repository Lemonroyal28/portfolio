import { activities } from '@/data/activities';
import ActivityCard from './ActivityCard';

export default function ActivitiesSection() {
  return (
    <section id="extras">
      <div className="container">
        <h2 className="section-title">Extracurricular Activities</h2>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              name={activity.name}
              nameUrl={activity.nameUrl}
              logo={activity.logo}
              logoOnDark={activity.logoOnDark}
              years={activity.years}
              description={activity.description}
              bulletPoints={activity.bulletPoints}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
