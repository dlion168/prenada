import { ScrollView, View, Text } from 'react-native';
import ChecklistItem from '../components/check_list/ChecklistItem.js'

const HomePage = ()=>{
    const checklist=[{"checked":false, "text":"Start taking prenatal Vitamin", "liked": false},
    {"checked":false, "text":"Start taking prenatal Vitamin", "liked": false},
    {"checked":false, "text":"Start taking prenatal Vitamin", "liked": false},
    {"checked":false, "text":"Start taking prenatal Vitamin", "liked": false}
    ]
    return(
    <ScrollView>
        <View>
            <Text>Week 1 of Pregnency</Text>
        </View>
        {checklist.map((e)=>{<ChecklistItem checked={e.checked} text={e.text} liked={e.liked}></ChecklistItem>})}
        <View>
            <Text>Body Data</Text>
        </View>
        <View>
            <Text>Library</Text>
        </View>
    </ScrollView>
    )
}
export default HomePage;