import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    FlatList,
    Modal,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const NIGERIAN_ZONES = [
  { id: 1, name: "Lagos" },
  { id: 2, name: "Abuja" },
  { id: 3, name: "Kano" },
  { id: 4, name: "Port Harcourt" },
  { id: 5, name: "Ibadan" },
  { id: 6, name: "Enugu" },
  { id: 7, name: "Kaduna" },
  { id: 8, name: "Owerri" },
  { id: 9, name: "Benin City" },
  { id: 10, name: "Abeokuta" },
];

const AREA_TYPES = [
  { id: 1, name: "Residential" },
  { id: 2, name: "Commercial" },
  { id: 3, name: "Industrial" },
  { id: 4, name: "Mixed" },
];

export default function SelectLocation() {
  const router = useRouter();
  const [selectedZone, setSelectedZone] = useState(NIGERIAN_ZONES[0]);
  const [selectedArea, setSelectedArea] = useState<
    (typeof AREA_TYPES)[0] | null
  >(null);
  const [showZoneModal, setShowZoneModal] = useState(false);
  const [showAreaModal, setShowAreaModal] = useState(false);

  const handleSelectZone = (zone: (typeof NIGERIAN_ZONES)[0]) => {
    setSelectedZone(zone);
    setShowZoneModal(false);
  };

  const handleSelectArea = (area: (typeof AREA_TYPES)[0]) => {
    setSelectedArea(area);
    setShowAreaModal(false);
  };

  const handleSubmit = () => {
    if (selectedZone && selectedArea) {
      router.push("/(tabs)/index");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, flexDirection: "column" }}>
        {/* Header */}
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 20,
            paddingTop: 24,
            flexDirection: "row",
            alignItems: "center",
            borderBottomColor: "#F0F0F0",
            borderBottomWidth: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ paddingRight: 16 }}
          >
            <MaterialIcons name="arrow-back" size={28} color="#181725" />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 20,
            paddingVertical: 32,
            paddingBottom: 80,
          }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Location Icon */}
          <View
            style={{
              width: 140,
              height: 140,
              borderRadius: 70,
              backgroundColor: "#F0F0F0",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 28,
              alignSelf: "center",
            }}
          >
            <MaterialIcons name="location-on" size={80} color="#53B175" />
          </View>

          {/* Title */}
          <Text
            style={{
              fontSize: 28,
              fontWeight: "800",
              color: "#181725",
              marginBottom: 12,
              lineHeight: 36,
              textAlign: "center",
            }}
          >
            Select Your{"\n"}Location
          </Text>

          {/* Subtitle */}
          <Text
            style={{
              fontSize: 14,
              color: "#7C7C7C",
              marginBottom: 40,
              textAlign: "center",
              lineHeight: 21,
            }}
          >
            Switch on your location to stay in tune with{"\n"}what&apos;s
            happening in your area
          </Text>

          {/* Your Zone */}
          <Text
            style={{
              fontSize: 12,
              color: "#7C7C7C",
              marginBottom: 8,
              fontWeight: "500",
              letterSpacing: 0.5,
            }}
          >
            Your Zone
          </Text>

          <TouchableOpacity
            onPress={() => setShowZoneModal(true)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: 12,
              paddingHorizontal: 12,
              borderBottomColor: "#E2E2E2",
              borderBottomWidth: 2,
              marginBottom: 32,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "#181725",
              }}
            >
              {selectedZone.name}
            </Text>
            <MaterialIcons name="expand-more" size={24} color="#7C7C7C" />
          </TouchableOpacity>

          {/* Your Area */}
          <Text
            style={{
              fontSize: 12,
              color: "#7C7C7C",
              marginBottom: 8,
              fontWeight: "500",
              letterSpacing: 0.5,
            }}
          >
            Your Area
          </Text>

          <TouchableOpacity
            onPress={() => setShowAreaModal(true)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: 12,
              paddingHorizontal: 12,
              borderBottomColor: "#E2E2E2",
              borderBottomWidth: 2,
              marginBottom: 60,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: selectedArea ? "500" : "400",
                color: selectedArea ? "#181725" : "#CCCCCC",
              }}
            >
              {selectedArea ? selectedArea.name : "Types of your area"}
            </Text>
            <MaterialIcons name="expand-more" size={24} color="#7C7C7C" />
          </TouchableOpacity>
        </ScrollView>

        {/* Submit Button */}
        <View style={{ paddingHorizontal: 20, paddingBottom: 24 }}>
          <TouchableOpacity
            onPress={handleSubmit}
            disabled={!selectedArea}
            style={{
              paddingVertical: 16,
              backgroundColor:
                selectedArea && selectedZone ? "#53B175" : "#CCCCCC",
              borderRadius: 19,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "#fff",
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Zone Modal */}
      <Modal
        visible={showZoneModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowZoneModal(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              maxHeight: "80%",
            }}
          >
            {/* Header */}
            <View
              style={{
                padding: 20,
                borderBottomColor: "#E2E2E2",
                borderBottomWidth: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: "#181725",
                }}
              >
                Select Zone
              </Text>
              <TouchableOpacity onPress={() => setShowZoneModal(false)}>
                <MaterialIcons name="close" size={24} color="#181725" />
              </TouchableOpacity>
            </View>

            {/* Zone List */}
            <FlatList
              data={NIGERIAN_ZONES}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelectZone(item)}
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 20,
                    borderBottomColor: "#F0F0F0",
                    borderBottomWidth: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor:
                      selectedZone.id === item.id ? "#F0F0F0" : "#fff",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: "#181725",
                    }}
                  >
                    {item.name}
                  </Text>
                  {selectedZone.id === item.id && (
                    <MaterialIcons
                      name="check-circle"
                      size={24}
                      color="#53B175"
                    />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Area Modal */}
      <Modal
        visible={showAreaModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowAreaModal(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              maxHeight: "80%",
            }}
          >
            {/* Header */}
            <View
              style={{
                padding: 20,
                borderBottomColor: "#E2E2E2",
                borderBottomWidth: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: "#181725",
                }}
              >
                Select Area
              </Text>
              <TouchableOpacity onPress={() => setShowAreaModal(false)}>
                <MaterialIcons name="close" size={24} color="#181725" />
              </TouchableOpacity>
            </View>

            {/* Area List */}
            <FlatList
              data={AREA_TYPES}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelectArea(item)}
                  style={{
                    paddingVertical: 16,
                    paddingHorizontal: 20,
                    borderBottomColor: "#F0F0F0",
                    borderBottomWidth: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor:
                      selectedArea?.id === item.id ? "#F0F0F0" : "#fff",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: "#181725",
                    }}
                  >
                    {item.name}
                  </Text>
                  {selectedArea?.id === item.id && (
                    <MaterialIcons
                      name="check-circle"
                      size={24}
                      color="#53B175"
                    />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
