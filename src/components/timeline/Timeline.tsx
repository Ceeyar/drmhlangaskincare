import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import FoundationIcon from '@mui/icons-material/Foundation';
import { Tooltip } from 'components/Index';
import { TIMELINE_ITEMS } from 'constants/Index';

export default function MyTimeline() {

    const iconMapping = {
        AssuredWorkloadIcon: <AssuredWorkloadIcon />,
        FoundationIcon: <FoundationIcon />,
        SchoolIcon: <SchoolIcon />,
    };

    return (
        <Timeline position="alternate">
            {
                TIMELINE_ITEMS.map(item =>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            {item.duration}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color={item.isWork ? "inherit" : "grey"}>
                                {iconMapping[item.icon]}
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Tooltip institution={item.institution} position={item.position} addtionalText={item.additionalText} />
                        </TimelineContent>
                    </TimelineItem>
                )
            }
        </Timeline>
    );
}
