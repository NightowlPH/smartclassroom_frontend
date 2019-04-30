import { Component, OnInit} from '@angular/core'
import * as $ from 'jquery'
declare var $: any;

import { ErrorHandlerService } from '../../../error-handler.service';
import { RoomStatusService } from './room-status.service';

var temp_change: boolean = false
var room_status_id: string
var temperature: number

@Component
({
	selector: 'room-status-cmp',
	templateUrl: 'room-status.component.html'
})

export class RoomStatusComponent implements OnInit
{
	room_status: object[]
	devices: object[]

	filter: string
	row = 9
	p = 1

	constructor( private roomStatusService:RoomStatusService){}

	ngOnInit()
	{		
		this.roomStatusService.GetRoomStatus()
		.subscribe( data =>
		{
			this.room_status = data['room_status']
			this.room_status.forEach( room =>
			{						
				room['devices'].forEach( device =>
				{					
					if(device['remote_design'] == "Temperature Slider")
					{
						$(document).ready(function(){
							$("#"+device['room_status_id']).ionRangeSlider({					
					            min: device['min'],
					            max: device['max'],
					            from: device['device_status'],
					            postfix: device['postfix'],
					            prettify: device['prettify'],
					            hasGrid: device['hasGrid'],
					            disable: device['disable'],					           
					            onFinish: function(data)
					            {									            	     
					            	var room_status_id1 = data['input'][0]['id']					            	
					            	var temperature1 = data['fromNumber']
					            	console.log(temperature1)
					            	temperature = temperature1
					            	room_status_id = room_status_id1
					            	temp_change = true								       	
					            }
					        });
						})
					}					
				})				 
			})
		})
	}

	valuechange(value: any) // CONTROLL DEVICE
	{		
		var room_status_id = value['target']['id']
		console.log(value)		
		var data = {value: value['target']['checked']}
		this.roomStatusService.ControlDevice(data,room_status_id)
		.subscribe( data =>
		{
			this.ngOnInit()
		})
	}

	ngDoCheck()
	{
		if(temp_change == true)
		{
			var data = {value: temperature}
			console.log(data)
			this.roomStatusService.ControlDevice(data,room_status_id)
			.subscribe( data =>
			{
				this.ngOnInit()
			})
			temp_change = false
		}
	}
}