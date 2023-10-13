import React,{useState} from 'react'

export default function Search() {
    const [Students,SetStudents] = useState([])
  return (
    <div>
        <input type='text' placeholder='Search'></input>
        <div class="container">
	<table>
		<thead>
			<tr>
				<th>Student Name</th>
				<th>Email</th>
				<th>Birthday</th>
				<th>Gender</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td></td>
			</tr>
			<tr>
				<td>Cell 1</td>
				
			</tr>
			<tr>
				<td>Cell 1</td>
				
			</tr>
			<tr>
				<td>Cell 1</td>
			</tr>
			
		</tbody>
	</table>
</div>
    </div>
  )
}
