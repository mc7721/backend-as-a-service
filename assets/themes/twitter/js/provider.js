function listProviders()
    {
    newscount = 0;
    $.getJSON('data/providers.json', function(data) {
    	
    	$toggle=1;
    	
    	rowheader = '<td align="center" valign="top">';
    	$('#providerListing').append(rowheader);	
    	
    	 $.each(data['stack'], function(key, val) {
    	 	
				var template = $('#providerListingTemplate').html();
				var html = Mustache.to_html(template, val);
				$('#providerListing').append(html);
				
				if($toggle==2){ 
					
					rows = "</tr><tr>";
					$('#providerListing').append(rows);						

					$toggle=0;
					}			
				$toggle++;
	        });
        
        });
        
    	rowfooter = '</td></tr>';
    	$('#providerListing').append(rowfooter);	        
        
    }    
     