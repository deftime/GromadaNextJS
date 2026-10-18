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

export function SkeletonEdit() {
  return (
    <div className="skeleton edit">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="area"></div>
      <div className="row">
        <div className="btn"></div>
        <div className="btn"></div>
        <div className="btn"></div>
      </div>
    </div>
  )
}

export function SkeletonLogin() {
  return (
    <div className="skeleton-login">
      <span></span>
      <span></span>
    </div>
  )
}