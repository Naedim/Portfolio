<template>
    <Select>
    <SelectTrigger>
      <SelectValue placeholder="change the main color" />
    </SelectTrigger>
    <SelectContent>
        <div v-for = "color in themeColors" value="apple" class = "flex justify-betwen items-center w-full">
         <p class = "text-center">{{ color }}</p> 
          <div :class = "`h-2 w-2 rounded-full   bg-red-500 flex bg-${color}-500`"></div>
        </div>
    </SelectContent>
  </Select>

</template>
<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
const defaultThemeColor = "violet"
const themeColor = useState("themeColor", () => defaultThemeColor );
const themeColors = ["blue", "red", "green", "lime", defaultThemeColor]
</script>