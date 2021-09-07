import React from "react";
import { Space, Select, Tooltip } from "antd";
// import { AimOutlined } from "@ant-design/icons";
import styles from "./gantt.module.css";
import { viewModeOptions, ViewMode } from "../../types/public-types";
import SettingsIcon from "../icons/settings";
import ToTodayIcon from "../icons/toToday";
const { Option } = Select;
interface GanttHeaderProps {
  toToday: () => void;
  toConfig: () => void;
  modeChange: (val: ViewMode) => void;
}
export const GanttHeader: React.FC<GanttHeaderProps> = ({
  toToday,
  toConfig,
  modeChange,
}) => {
  // const [viewMode, setViewMode] = useState("Day");
  const handleOperation = () => {
    toConfig();
  };
  const handleChange = (value: ViewMode) => {
    modeChange(value);
  };
  return (
    <div className={styles.ganttHeader}>
      <Space size={20}>
        <span className="ganttCalendarSelect">
          <Select
            style={{ width: 50 }}
            onChange={handleChange}
            defaultValue={ViewMode.Day}
            virtual={false}
            dropdownClassName="calendarSwitch"
          >
            {viewModeOptions.map(ele => {
              return (
                <Option key={ele.value} value={ele.value}>
                  {ele.label}
                </Option>
              );
            })}
          </Select>
        </span>
        {/* <AimOutlined className={styles.cursor} onClick={toToday} /> */}
        <Tooltip placement="top" title="今天">
          <span className={styles.cursor} onClick={toToday}>
            <ToTodayIcon />
          </span>
        </Tooltip>
        <Tooltip placement="top" title="设置">
          <span className={styles.cursor} onClick={handleOperation}>
            <SettingsIcon />
          </span>
        </Tooltip>
      </Space>
    </div>
  );
};
export default GanttHeader;
