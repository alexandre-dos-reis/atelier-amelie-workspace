import { Box, Tabs as MuiTabs, Tab as MuiTab } from "@pankod/refine-mui";
import { cloneElement, ReactElement, SyntheticEvent, useState } from "react";
import { a11yProps } from "./a11yProps";
import { Props as TabProps } from "./Tab";

interface Props {
  children?: Array<ReactElement<TabProps>>;
}

export function Tabs({ children }: Props) {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChangeTab = (event: SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MuiTabs value={currentTab} onChange={handleChangeTab} aria-label="basic tabs example">
          {children?.map((c, i) => (
            <MuiTab key={i} label={c.props.label} {...a11yProps(i)} />
          ))}
        </MuiTabs>
      </Box>
      {children?.map((c, i) =>
        cloneElement(c, {
          index: i,
          key: i,
          value: currentTab,
        })
      )}
    </>
  );
}
