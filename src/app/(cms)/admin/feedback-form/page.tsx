import { Item } from "@/components/admin/Item";

export default function FeedbackForm() {
  return (
    <div className="admin-list">
      <div className="admin-list-head">
        <div className="num">#</div>
        <div className="title">Title</div>
        <div className="side-zone">Item data</div>
      </div>
      <Item num={1} title="Feedback from form" href="feedback-form/12546" id={'12546'} />
      <Item num={2} title="Plz call me!" href="feedback-form/12547"  id={'12547'}/>
      <Item num={3} title="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum." href="feedback-form/54548" id={'54548'}/>
      <Item num={4} title="Мені треба крутий адвокат у кримінальній справі" href="feedback-form/56749" id={'56749'}/>
    </div>
  )
}