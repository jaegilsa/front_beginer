function spobtn() {
  const Click = () => {
    alert('button clicked!');
  };

  return (
    <button className="btn" type="button" onClick={Click}>
      <span className="coin_icon"></span>
      <span className="coin_font">10,000 스포코인</span>
    </button>
  );
}

export default spobtn;
