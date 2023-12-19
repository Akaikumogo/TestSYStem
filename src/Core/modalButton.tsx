type ModalButton = {
  modalState: any;
  title: any;
  color: string;
  component: any;
};
const ModalButton = (props: ModalButton) => {
  const { modalState, title, color, component } = props;
  return (
    <button
      className={`text-justify lg:h-[35px] xl:h-[40px] 2xl:h-[44px] 2xl:min-w-[65px] flex items-center gap-[10px] text-white xl:rounded-xl lg:rounded-lg 2xl:py-1 2xl:px-3 lg:px-[5px]`}
      style={{ backgroundColor: `${color}` }}
      onClick={() => modalState(true)}
    >
      <div className="2xl:text-[24px] xl:text-[18px] lg:text-[14px] mx-auto">
        {component}
      </div>
      {title ? (
        <div className="text-justify m-[1px] 2xl:text-[14px] xl:text-[10px] lg:text-[8px] font-bold">
          {title}
        </div>
      ) : null}
    </button>
  );
};
export default ModalButton;
