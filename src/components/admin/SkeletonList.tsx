import '@/styles/admin/skeletons.scss';

export function SkeletonList() {
  return (
    <div className="skeleton list">
      <div className="top"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="more">...</div>
    </div>
  )
}